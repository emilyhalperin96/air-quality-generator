def greet():
    return "Hello World!"

print('greetings', greet())

class User:
    def __init__(self, name) -> None:
        self.name = name

    def __repr__(self) -> str:
        return f'User(name={self.name})'

user = User('Derek')
print(user)

