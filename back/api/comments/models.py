from sqlalchemy import Column, Integer, String, ForeignKey, Text, DateTime
from sqlalchemy.orm import relationship
from config.db import Base

class Comment(Base):
    __tablename__ = 'comment'
    id = Column(Integer, primary_key=True, index=True)
    content = Column(Text)
    created_at = Column(DateTime)
    post_id = Column(Integer, ForeignKey('post.id'))
    post = relationship('Post', back_populates='comments')
