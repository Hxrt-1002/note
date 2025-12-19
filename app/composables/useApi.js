import axios from "axios";

const API_URL = 'http://localhhost:4000/api'

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

const setAuthToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${id}`
    } else {
        delete axiosInstance.defaults.headers.common['Authorization']
    }
}

export const useApi = () => {
    const api = API_URL

    const login = async(email, password) => {
        try {
            const response = await api.post('/auth/login', {email, password})
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const register = async(userData) => {
        try {
            const response = await api.post('/auth/register', userData)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const getMe = async() => {
        try {
            const response = await api.get('/auth/me')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    // <<<<< admin >>>>>

    //topics
    const getTopics = async(evaluationId) => {
        try {
            const response = await api.get('/admin/Topics', {
                params: { evalautionId } 
            })
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addTopics = async(data) => {
        try {
            const response = await api.post('/admin/topics', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const updateTopics = async(id, data) => {
        try {
            const response = await api.put(`/admin/topics/${id}`, data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const deleteTopics = async(id) => {
        try {
            const response = await api.delete(`/admin/topics/${id}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }


    //Evaluations
    const getEvaluations = async() => {
        try {
            const response = await api.get('/admin/evaluations')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addEvaluations = async(data) => {
        try {
            const response = await api.post('/admin/evaluations', data )
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const updateEvaluations = async(id, data) => {
        try {
            const response = await api.put(`/admin/evaluations/${id}`, data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //Indicators
    const getIndicators = async(topiId) => {
        try {
            const response = await api.get('/admin/Topics', {
                params: { topicId } 
            })
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addIndicators = async(data) => {
        try {
            const response = await api.post('/admin/topics', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const updateIndicators = async(id, data) => {
        try {
            const response = await api.put(`/admin/topics/${id}`, data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const deleteIndicators = async(id) => {
        try {
            const response = await api.delete(`/admin/topics/${id}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const createIndicatorLevel = async(indicatorId, data) => {
        try {
            const response= await api.post(`/admin/indicators/${indicatorId}`, data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //Allocations
    const getAllocations = async(evaluationId) => {
        try {
            const response = await api.get('/admin/allocations', {
                params: { evaluationId } 
            })
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addAllocations = async(data) => {
        try {
            const response = await api.post('/admin/allocations', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //Employee & Department
    const getEmployees = async() => {
        try {
            const response = await api.get('/admin/employees')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const getDepartments = async() => {
        try {
            const response = await api.get('/admin/departments')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const updateRole = async(id, role) => {
        try {
            const response = await api.put(`/admin/employees/${id}/role`, role)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    // <<<<< Employee >>>>>

    //profile
    const getProfile = async() => {
        try {
            const response = await api.get('/employee/profile')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const updateProfile = async(data) => {
        try {
            const response = await api.put('/employee/profile', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //Self-Evaluation
    const getSelfEvaluations = async() => {
        try {
            const response = await api.get('/employee/my-evaluations')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //EmployeeDepartment
    const getEmployeeDepartments = async() => {
        try {
            const response = await api.get('/employee/departments')
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //EmployeeAllocation
    const getResultsAllocation = async(alloationId) => {
        try {
            const response = await api.get(`/employee/results/${allocationId}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const getProgressAllocation = async(alloationId) => {
        try {
            const response = await api.get(`/employee/progress/${allocationId}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const getEvaluationAllocation = async(alloationId) => {
        try {
            const response = await api.get(`/employee/evaluation/${allocationId}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    //AddEvidence
    const addSelfEvaluations = async(data) => {
        try {
            const response = await api.post('/employee/results', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const UploadEvidence = async(data) => {
        try {
            const response = await api.post('/employee/upload-evidence', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const SubmitSelfEvaluation = async(data) => {
        try {
            const response = await api.post('/employee/submit-self-evaluation', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    // <<<<< Evaluator >>>>>

    //assign
    const getAssigned = async(data) => {
        try {
            const response = await api.get('/evaluator/assigned', data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }
    
    const getEmployeeDetail = async(allocationId) => {
        try {
            const response = await api.get(`/evaluator/assigned/${allocationId}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const getSummaryAllocation = async(allocationId) => {
        try {
            const response = await api.get(`/evaluator/assigned/${allocationId}`)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addScore = async(data) => {
        try {
            const response = await api.post(`/evaluator/score`, data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addComment = async(data) => {
        try {
            const response = await api.post(`/evaluator/comment`, data)
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const addSignature = async(data) => {
        try {
            const response = await api.post(`/evaluator/signature`, data)
        } catch (error) {
            throw error.response?.data || error.message
        }
    }

    const Submit = async(data) => {
        try {
            const response = await api.post(`/evaluator/summit`, data)
        } catch (error) {
            throw error.response?.data || error.message
        }
    }


    return {
        login,
        register,
        getMe,

        //admin
        getTopics,
        addTopics,
        updateTopics,
        deleteTopics,

        getEvaluations,
        addEvaluations,
        updateEvaluations,
        
        getIndicators,
        addIndicators,
        updateIndicators,
        deleteIndicators,
        createIndicatorLevel,

        getAllocations,
        addAllocations,

        getEmployees,
        getDepartments,
        updateRole,

        //employee
        getProfile,
        updateProfile,

        getSelfEvaluations,
        getEmployeeDepartments,
        getResultsAllocation,
        getEvaluationAllocation,
        getProgressAllocation,
        addSelfEvaluations,
        UploadEvidence,
        SubmitSelfEvaluation,

        //evaluator
        getAssigned,
        getEmployeeDetail,
        getSummaryAllocation,
        addScore,
        addComment,
        addSignature,
        Submit
    }
}