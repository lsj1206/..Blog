from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from config.db import get_db

router = APIRouter(
        prefix="/comment",
)

@router.post("/create/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
