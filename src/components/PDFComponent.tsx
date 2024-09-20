import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import AppButton from './elements/AppButton';
import toast from 'react-hot-toast';
import { uploadPDF } from '../api/services';
import handleError from '../utils/handleError';

type PDFComponentProps = {
    pdf: File,
    handleResponse:(fileName:string)=>void
}

function PDFComponent({ pdf,handleResponse }: PDFComponentProps) {

    const [numPages, setNumPages] = useState<number>();
    const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());

    const handlePageSelect = (pageNumber: number) => {
        const newSet = new Set(selectedPages);
        if (newSet.has(pageNumber)) {
            newSet.delete(pageNumber)
        } else {
            newSet.add(pageNumber)
        }
        setSelectedPages(newSet)
    }

    const handleFileSubmit = async () => {
        if (selectedPages.size == 0) return toast.error('Select atleast one page to create new pdf.');
        const data = new FormData();
        data.append('selectedPages', JSON.stringify(Array.from(selectedPages)));
        data.append('pdf', pdf);
        try {
            const responseData = await uploadPDF(data);
            handleResponse(responseData.fileName)
            console.log('response from server: ',responseData)

        } catch (error: unknown) {
           
            handleError(error)
        }

    }

    return (
        <div className='flex flex-col overflow-hidden items-center'>
            <AppButton click={handleFileSubmit} className='mb-3' text='create' />
            <Document
                file={pdf}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className='flex justify-center  flex-wrap'>
                {Array.from(new Array(numPages), (_, ind) => (
                    <div key={ind} className={`flex flex-col  items-center ${selectedPages.has(ind) ? 'p-0 border-8 border-primary-color' : 'p-2'} `}>
                        <Page
                            onClick={() => handlePageSelect(ind)}
                            width={300}
                            pageNumber={ind + 1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false} />
                        <p className='text-black text-sm w-full text-center bg-white'> {ind + 1} / {numPages}</p>
                    </div>
                ))}
            </Document>

        </div>
    );
}

export default PDFComponent