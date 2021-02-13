from bs4 import BeautifulSoup as bs
HtmlFile = open('build/index.html', 'r', encoding='utf-8')
source_code = HtmlFile.read()
html = bs(source_code, "html.parser")

for item in html.find_all(True):
    if not(item.text == "" or item.text.startswith('<')):
        # print(item)
        print(item.text)