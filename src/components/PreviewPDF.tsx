import { ChangeEvent, useState } from 'react'
import { pdfjs } from 'react-pdf';
import AppInput from './elements/AppInput'
import PDFComponent from './PDFComponent';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PreviewPDF = () => {
    const [selectedFile, setSelectedFile] = useState<null | File>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        setSelectedFile((file!))
    }


    return (
        <div className='flex flex-col gap-4 items-center'>
            <div className='flex justify-between items-end'>
                <AppInput selectFile={handleFileSelect} />
            </div>

            {selectedFile && <PDFComponent pdf={selectedFile} />}
        </div>
    )
}

export default PreviewPDF