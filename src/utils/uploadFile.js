// Mock file upload function
export const uploadFile = async (file) => {
  // Simulate upload delay based on file size
  const fileSizeMB = file.size / (1024 * 1024);
  const delay = Math.min(fileSizeMB * 100, 3000); // Max 3 seconds delay
  
  // Simulate random failures (10% chance)
  const shouldFail = Math.random() < 0.1;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        const errorMessages = [
          'Network Error',
          'File too large',
          'Server timeout',
          'Invalid file type',
          'Upload failed'
        ];
        const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        reject(new Error(randomError));
      } else {
        resolve({ success: true, fileName: file.name });
      }
    }, delay);
  });
};
