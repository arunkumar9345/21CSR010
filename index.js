document.getElementById('fetchButton').addEventListener('click', fetchApiResponse);

function fetchApiResponse() {
    fetch('http://20.244.56.144/test/rand', {
        method: 'GET', // or 'POST' if needed
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkyNDMxLCJpYXQiOjE3MTg2OTIxMzEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZhNWU4MDE5LTZmN2YtNDFkYi1hNjk3LTI3NjkwMzQ3NWRlYyIsInN1YiI6ImFydW5rdW1hcjc4OTBhQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IndlbGNvbWUiLCJjbGllbnRJRCI6IjZhNWU4MDE5LTZmN2YtNDFkYi1hNjk3LTI3NjkwMzQ3NWRlYyIsImNsaWVudFNlY3JldCI6ImJLRWJ2Wkd2c3pud25ka2YiLCJvd25lck5hbWUiOiJBcnVua3VtYXIgayIsIm93bmVyRW1haWwiOiJhcnVua3VtYXI3ODkwYUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMUNTUjAxMCJ9.HitAWMUjf0ALhmEI5YY-B4E1p0WSbyowdWlu3Hrjc6Q' // if needed
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('responseDisplay').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        document.getElementById('responseDisplay').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
