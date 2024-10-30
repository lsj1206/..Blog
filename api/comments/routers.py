from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from starlette import status

from config.db import get_db
from api.comments.schemas import Comment_create_schema

router = APIRouter(
        prefix="/comment",
)

@router.post("/create/{post_id}", status_code=status.HTTP_204_NO_CONTENT)

def comment_create(post_id: int, comment: Comment_create_schema, db: Session = Depends(get_db)):
    pass
