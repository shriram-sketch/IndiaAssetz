import { useRef } from 'react'

function FileUploadArea({ onFileSelect }) {
  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleChange = (e) => {
    const selectedFiles = e.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      onFileSelect(selectedFiles)
    }
    // Reset input to allow selecting same file again
    e.target.value = ''
  }

  return (
    <div className="mb-8">
      <div onClick={handleClick} className="upload-box">
        <div className="upload-text">
          <svg className="upload-icon" stroke="currentColor" fill="none" viewBox="0 0 48 48">
            <path 
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          <p className="upload-title">Click to upload files</p>
          <p className="upload-subtitle">Select one or more files to upload</p>
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleChange}
        className="hidden"
      />
    </div>
  )
}

export default FileUploadArea
