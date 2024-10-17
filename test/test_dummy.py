from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

origins = [
    "http://localhost:3000",  # Frontend server URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Post(BaseModel):
    id: int
    title: str
    content: str
    author: str
    created_at: datetime

@app.get("/posts/dummy", response_model=Post)
async def get_dummy_post():
    return Post(
        id=1,
        title="더미 포스트 제목",
        content="이것은 시연을 위한 더미 포스트 내용입니다.",
        author="홍길동",
        created_at=datetime.utcnow()
    )
