import html2canvas from 'html2canvas';

export function downloadImg(){
        return html2canvas(document.querySelector(".pictureContainer"))
            .then(canvas => {
            var a = document.createElement('a'); 
            document.body.appendChild(a); 
            a.download = "image.png"; 
            a.href =  canvas.toDataURL()
            a.click();
        });
}