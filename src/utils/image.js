
// add white background for transparent image, which input is a file uploaded by user
// return a data url
export function addWhiteBackground(file) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, img.width, img.height);
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL());
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(file);
    });
}