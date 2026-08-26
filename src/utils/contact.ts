export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export async function submitContactForm(payload: ContactPayload): Promise<ContactResult> {
  if (!endpoint) {
    return {
      ok: false,
      message: "The direct message service is not connected yet. Please use the available profile contact details.",
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return {
      ok: false,
      message: "The message could not be sent. Please try again or use a direct contact link.",
    };
  }

  return {
    ok: true,
    message: "Message sent. Thank you for reaching out.",
  };
}
