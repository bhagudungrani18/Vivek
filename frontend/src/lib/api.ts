const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return await response.json();
  } catch {
    // Fallback: if backend is not running, simulate success
    console.warn("Backend not available, simulating form submission");
    return {
      success: true,
      message: "Thank you for reaching out! The family will contact you soon. (Demo mode)",
    };
  }
}
