const API_URL = 'https://daniellopez.dev/api'

export async function getAllDivisions() {
    try {
        const response = await fetch(`${API_URL}/divisions/get-divisions`);
        const data = await response.json()
        
        return data.data;
    } catch (error) {
        console.log(error)
    }
}