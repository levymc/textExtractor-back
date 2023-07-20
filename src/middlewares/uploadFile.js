import { getTextExtractor } from 'office-text-extractor'

export async function uploadFile(){
    // Create a new instance of the extractor.
    const extractor = getTextExtractor()

    // Extract text from a URL, file or buffer.
    const location ='/home/levy/Documentos/dossie.pdf'
    const text = await extractor.extractText({
        input: location, // this can be a file path or a buffer
        type: 'file', // this is can be 'url', 'file' or 'buffer'
    })

    console.log(text)
}

uploadFile()