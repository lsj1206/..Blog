from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime
from config.db import Base

class Post(Base):
    __tablename__ = 'posts'
    id = Column(Integer, primary_key=True)
    title = Column(String(128))
    content = Column(Text)
    created_at = Column(DateTime)
