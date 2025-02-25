import { API_URL } from '../util/API_URL'
import axios from 'axios'

const create = async(formData) => {
    const response = await axios.post(`${API_URL}/slider`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    return response.data
}

export { create }