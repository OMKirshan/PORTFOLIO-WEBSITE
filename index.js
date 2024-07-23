function displayAlert() {
    alert("Button clicked!");
}

function downloadFile() {
    const a = document.createElement('a')
    const url="/project1/image/om kirshan cv.pdf"
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
