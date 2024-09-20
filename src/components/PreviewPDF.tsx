import { ChangeEvent, useState } from 'react'
import { pdfjs } from 'react-pdf';
import AppInput from './elements/AppInput'
import PDFComponent from './PDFComponent';
import AppButton from './elements/AppButton';
import { downloadPDF } from '../api/services';
import toast from 'react-hot-toast';
import handleError from '../utils/handleError';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PreviewPDF = () => {
    const [selectedFile, setSelectedFile] = useState<null | File>(null);
    const [pdfConverted, setPdfConverted] = useState(false)
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        setSelectedFile((file!))
    }

    const handleUploadResponse = (fileName: string) => {
        console.log('file: ', fileName)
        setPdfConverted(true)
        setFileName(fileName)
    }

    const handleDownload = async () => {
        try {
            if(!fileName) return toast.error('No file name') 
                const data = await downloadPDF(fileName);
                console.log(data)
                const blob = new Blob([data], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
        
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName!);
        
                document.body.appendChild(link);  
                link.click();  
                document.body.removeChild(link); 
        } catch (error) {
            handleError(error)
        }
        
    };

    return (
        <div className='flex flex-col p-5 lg:p-0 gap-4  items-center'>
            {!pdfConverted ?
                <div className='flex justify-between items-end'>
                    <AppInput selectFile={handleFileSelect} />
                </div> :
                <div className='flex  flex-col gap-2'>
                    <p className='text-white text-wrap  font-semibold'>{'Your pdf is ready! Click the download button to download it.'}</p>
                    <div className='flex mt-2 justify-between items-center'>
                        <p className='text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis font-semibold'>{fileName}</p>
                        <AppButton click={handleDownload} text='Download' />
                    </div>
                </div>
            }

            {selectedFile && !pdfConverted && <PDFComponent handleResponse={handleUploadResponse} pdf={selectedFile} />}
        </div>
    )
}

export default PreviewPDF