from pydantic import BaseModel, Field


class ContactForm(BaseModel):
    """Schema for the contact form submission."""

    name: str = Field(..., min_length=1, max_length=100, description="Name of the person reaching out")
    phone: str = Field(..., min_length=5, max_length=20, description="Phone number")
    message: str = Field(..., min_length=1, max_length=2000, description="Message content")


class ContactResponse(BaseModel):
    """Response schema for contact form submission."""

    success: bool
    message: str
