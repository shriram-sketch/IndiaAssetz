import { useState, useCallback } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { uploadFile } from './utils/uploadFile'
import FileList from './components/FileList'
import FileUploadArea from './components/FileUploadArea'

function App() {
  const [files, setFiles] = useState([])

  const handleFileSelect = useCallback(async (selectedFiles) => {
    const newFiles = Array.from(selectedFiles).map(file => ({
      id: Date.now() + Math.random(),
      file: file,
      status: 'uploading',
      error: null
    }))

    setFiles(prev => [...prev, ...newFiles])

    // Upload each file independently
    newFiles.forEach(async (fileItem) => {
      try {
        await uploadFile(fileItem.file)
        
        setFiles(prev => prev.map(f => 
          f.id === fileItem.id 
            ? { ...f, status: 'success' }
            : f
        ))
        
        toast.success(`File ${fileItem.file.name} uploaded successfully!`)
      } catch (error) {
        setFiles(prev => prev.map(f => 
          f.id === fileItem.id 
            ? { ...f, status: 'failed', error: error.message }
            : f
        ))
        
        toast.error(`Failed to upload ${fileItem.file.name} — ${error.message}`)
      }
    })
  }, [])

  const handleRemoveFile = useCallback((fileId) => {
    setFiles(prev => prev.filter(f => f.id !== fileId))
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">
          File Uploader
        </h1>
        
        <FileUploadArea onFileSelect={handleFileSelect} />
        
        <FileList files={files} onRemove={handleRemoveFile} />
      </div>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  )
}

export default App
