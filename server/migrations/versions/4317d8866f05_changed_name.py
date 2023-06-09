"""changed name

Revision ID: 4317d8866f05
Revises: 
Create Date: 2023-04-03 10:13:51.190774

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4317d8866f05'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('usernamename', sa.String(), nullable=True))
        batch_op.drop_column('name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('usernamename')

    # ### end Alembic commands ###
