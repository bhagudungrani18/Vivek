import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.contact import router as contact_router

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Vivek Rupani Biodata API",
    description="Backend API for the marriage biodata website of Vivek Satishbhai Rupani",
    version="1.0.0",
)

# CORS — allow frontend origin
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    os.getenv("FRONTEND_URL", "http://localhost:3000"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount routes
app.include_router(contact_router, prefix="/api", tags=["Contact"])


@app.get("/")
async def root():
    return {
        "message": "Vivek Rupani Biodata API",
        "status": "running",
        "docs": "/docs",
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}
