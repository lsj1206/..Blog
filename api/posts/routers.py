from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api.posts.models import Post
from api.posts.schemas import post_create
from api.posts.services import get_post_list, get_post, create_post
from config.db import get_async_db

router = APIRouter(
        prefix="/posts",
)

@router.get("/list")
async def post_list(db: Session = Depends(get_async_db)):
    _post_list = await get_post_list(db)
    return _post_list

@router.get("/{post_id}")
async def post_detail(post_id: int, db: Session = Depends(get_async_db)):
    post = await get_post(db, post_id)
    return post

@router.post("/create")
async def post_create(post_create: post_create, db: Session = Depends(get_async_db)):
    post = await create_post(db, post_create)
    return post
