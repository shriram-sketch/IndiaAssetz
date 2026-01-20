// Mock API endpoint for file upload
const MOCK_API_URL = 'https://httpbin.org/post';

export const uploadFile = async (file) => {
  try {
    // Create FormData to simulate real file upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    formData.append('fileSize', file.size);
    formData.append('fileType', file.type);

    // Simulate upload delay based on file size
    const fileSizeMB = file.size / (1024 * 1024);
    const delay = Math.min(fileSizeMB * 100, 3000); // Max 3 seconds delay

    // Simulate random failures (10% chance) for testing error handling
    const shouldFail = Math.random() < 0.1;

    if (shouldFail) {
      // Simulate API error response
      await new Promise(resolve => setTimeout(resolve, delay));
      const errorMessages = [
        'Network Error',
        'File too large',
        'Server timeout',
        'Invalid file type',
        'Upload failed'
      ];
      const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
      throw new Error(randomError);
    }
    
    const response = await fetch(MOCK_API_URL, {
      method: 'POST',
      body: formData,
      // Note: httpbin.org doesn't require headers, but real API would
    });
    

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, delay));

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Return success response
    return {
      success: true,
      fileName: file.name,
      fileSize: file.size,
      uploadedAt: new Date().toISOString(),
      serverResponse: data
    };
  } catch (error) {
    // Handle network errors or API errors
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('Network Error - Please check your internet connection');
    }
    throw error;
  }
};
