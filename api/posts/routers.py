from fastapi import APIRouter, Depends ,status
from sqlalchemy.orm import Session
from api.posts.models import Post
from api.posts.schemas import post_create_schema, post_list_schema, post_delete_schema
from api.posts.services import get_post_list, get_post, create_post, delete_post
from config.db import get_async_db

router = APIRouter(
        prefix="/posts",
)

@router.get("/list", response_model=list[post_list_schema])
async def post_list(db: Session = Depends(get_async_db)):
    _post_list = await get_post_list(db)
    return _post_list

@router.get("/detail/{post_id}", response_model=post_list_schema)
async def post_detail(post_id: int, db: Session = Depends(get_async_db)):
    post = await get_post(db, post_id)
    return post

@router.post("/create")
async def post_create(post_create_schema: post_create_schema, db: Session = Depends(get_async_db)):
    post = await create_post(db, post_create_schema)

@router.delete("/delete/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
async def post_delete(post_id: int, db: Session = Depends(get_async_db)):
    post = await get_post(db, post_id)
    if post is None:
        raise HTTPException(status_code=400, detail="Post not found")
    await delete_post(db, post)
    return
