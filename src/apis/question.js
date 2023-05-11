const API_QUESTIONS = '/api/questions';

export async function addQuestion(value) {
    const response = await fetch(`${API_QUESTIONS}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value),
    });
    console.log(response);
    return response.json();
}