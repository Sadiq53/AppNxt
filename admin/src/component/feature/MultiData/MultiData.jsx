import { useState } from 'react'
import Spinner from '../../shared/Spinner/Spinner'
import HomeBanner from './Helpers/HomeBanner'
import WhatWeDo from './Helpers/WhatWeDo'
import Counter from './Helpers/Counter'

const MultiData = () => {

    const [isLoading, setIsLoading] = useState(false)

  return (
    <>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="flex-cs header p-3">
                        <h3>Multi Data Editor</h3>
                    </div>
                </div>

                <div className="col-md-6">
                    
                    <HomeBanner />

                    <WhatWeDo />

                </div>
                
                <div className="col-md-6">
                    <Counter />
                </div>

            </div>
        </div>
    </>
  )
}

export default MultiData