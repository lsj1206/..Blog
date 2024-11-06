import datetime
from pydantic import BaseModel, field_validator

class Comment_create_schema(BaseModel):
    content: str
    @field_validator("content")
    def content_must_not_be_empty(cls, value):
        if len(value) == 0:
            raise ValueError("Content must not be empty")
        return value

class Comment_schema(BaseModel):
    id: int
    content: str
    created_at: datetime.datetime
