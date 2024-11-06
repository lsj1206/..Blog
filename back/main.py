from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from api.posts.routers import router as post_router
from api.comments.routers import router as comment_router

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(post_router, prefix="/api")
app.include_router(comment_router, prefix="/api")
