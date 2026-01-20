function FileList({ files, onRemove }) {
  if (files.length === 0) {
    return (
      <div className="empty-state">
        No files uploaded yet
      </div>
    )
  }

  return (
    <div className="file-list">
      <h2 className="file-list-title">
        Uploaded Files ({files.length})
      </h2>
      
      {files.map((fileItem) => (
        <div key={fileItem.id} className="file-card">
          <div className="file-info">
            <div className="file-icon">
              {fileItem.status === 'uploading' && (
                <div className="spinner"></div>
              )}
              {fileItem.status === 'success' && (
                <svg className="icon-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
              {fileItem.status === 'failed' && (
                <svg className="icon-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            
            <div className="file-details">
              <p className="file-name">
                {fileItem.file.name}
              </p>
              <p className="file-size">
                {(fileItem.file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          
          <div className="file-actions">
            <div className="file-status">
              {fileItem.status === 'uploading' && (
                <span className="status-uploading">Uploading...</span>
              )}
              {fileItem.status === 'success' && (
                <span className="status-success">Success</span>
              )}
              {fileItem.status === 'failed' && (
                <span className="status-failed">
                  Failed {fileItem.error && `— ${fileItem.error}`}
                </span>
              )}
            </div>
            <button 
              onClick={() => onRemove(fileItem.id)}
              className="remove-btn"
              title="Remove file"
            >
              <svg className="remove-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FileList
