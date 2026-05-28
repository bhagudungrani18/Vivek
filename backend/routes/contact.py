from fastapi import APIRouter
from models.contact import ContactForm, ContactResponse

router = APIRouter()


@router.post("/contact", response_model=ContactResponse)
async def submit_contact(form: ContactForm) -> ContactResponse:
    """
    Handle contact form submission.
    
    In production, this would:
    - Store the message in a database
    - Send email notification to the family
    - Send WhatsApp notification (optional)
    
    For now, it logs the submission and returns success.
    """
    print(f"[Contact Form] New inquiry from {form.name}")
    print(f"  Phone: {form.phone}")
    print(f"  Message: {form.message}")

    return ContactResponse(
        success=True,
        message=f"Thank you {form.name}! The Rupani family will get back to you soon.",
    )
