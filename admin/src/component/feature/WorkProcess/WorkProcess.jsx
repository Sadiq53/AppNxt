import { useState } from "react";
import { useFormik } from 'formik';
import Step1 from "./Helper/Step1";
import Step2 from "./Helper/Step2";
import Step3 from "./Helper/Step3";
import Step4 from "./Helper/Step4";
import { create } from "../../../services/WorkProcessService";
import { toast } from "react-toastify";
import Spinner from "../../shared/Spinner/Spinner";

const WorkProcess = () => {
    const [initialValues, setInitialValues] = useState({
        description: '',
        step1: {
            title: '',
            banner: null,
            description: ''
        },
        step2: {
            title: '',
            banner: null,
            description: ''
        },
        step3: {
            title: '',
            banner: null,
            description: ''
        },
        step4: {
            title: '',
            banner: null,
            description: ''
        }
    });
    const [isLoading, setIsLoading] = useState(false);

    const step1 = (data) => {
        form.setFieldValue('step1', data);
    };
    const step2 = (data) => {
        form.setFieldValue('step2', data);
    };
    const step3 = (data) => {
        form.setFieldValue('step3', data);
    };
    const step4 = (data) => {
        form.setFieldValue('step4', data);
    };

    const form = useFormik({
        initialValues,
        onSubmit: async (values) => {

            const formData = new FormData();
            formData.append("description", values.description);

            formData.append("step1[title]", values.step1.title);
            formData.append("step1[description]", values.step1.description);
            if (values.step1?.banner) {
                formData.append("step1[banner]", values.step1.banner);
            }

            formData.append("step2[title]", values.step2.title);
            formData.append("step2[description]", values.step2.description);
            if (values.step2?.banner) {
                formData.append("step2[banner]", values.step2.banner);
            }

            formData.append("step3[title]", values.step3.title);
            formData.append("step3[description]", values.step3.description);
            if (values.step3?.banner) {
                formData.append("step3[banner]", values.step3.banner);
            }

            formData.append("step4[title]", values.step4.title);
            formData.append("step4[description]", values.step4.description);
            if (values.step4?.banner) {
                formData.append("step4[banner]", values.step4.banner);
            }

            setIsLoading(true);
            try {
                const response = await create(formData);
                if (response.success) {
                    toast.success("Procedure Updated !!");
                }
            } catch (error) {
                console.error("Error updating procedure:", error);
                toast.error("Failed to update procedure. Please try again.");
            } finally {
                setIsLoading(false);
            }
        }
    });

    return (
        <>
            <div className="container-fluid">
                <form onSubmit={form.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header flex-cs header pt-4 pb-2">
                                    <h5>Edit Work Process</h5>
                                    <button className="btn btn-primary btn-lg" disabled={isLoading} type="submit">
                                        <i className="fa-solid fa-floppy-disk" /> &nbsp; Save {isLoading && <Spinner />}
                                    </button>
                                </div>
                                <div className="card-body py-2">
                                    <div className="my-3">
                                        <textarea
                                            rows={5}
                                            placeholder="Write Description"
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            id=""
                                            value={form.values.description}
                                            onChange={form.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <Step1 onDataChange={step1} />
                            <Step2 onDataChange={step2} />
                        </div>
                        <div className="col-md-6 mt-3">
                            <Step3 onDataChange={step3} />
                            <Step4 onDataChange={step4} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default WorkProcess;
