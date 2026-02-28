from bs4 import BeautifulSoup

path = r"c:\Users\USER\Documents\MyPortfolio\jesserabbassi\index.html"

with open(path, encoding="utf-8") as f:
    text = f.read()

soup = BeautifulSoup(text, "html.parser")

with open(path, "w", encoding="utf-8") as f:
    f.write(soup.prettify())

print("Formatted")
