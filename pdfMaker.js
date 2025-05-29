import  PDFDocument from 'pdfkit'
import fs from 'fs';

export function makePDF(data){

    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream('report.pdf'));

    doc.fontSize(20).text("Security Scan Report", { align: "center" });

    doc.moveDown();

    data.forEach(
        (obj)=>{
           doc.fontSize(12).fillColor("blue").text("TOOL" + obj.tool);
           doc.fontSize(10).fillColor("black").text(obj.output);
           doc.moveDown();
        }
    ) 
    doc.moveDown(); 
    doc.end();
};


