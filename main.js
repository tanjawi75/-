document.addEventListener('DOMContentLoaded', () => {
  fetch('ruad.json')
    .then(response => response.json())
    .then(data => {
      const tocContainer = document.getElementById('toc');
      const booksContainer = document.getElementById('booksContainer');

      // إنشاء الفهرس
      data.forEach((book, index) => {
        // إضافة عنصر الفهرس
        const tocItem = document.createElement('div');
        tocItem.className = 'toc-item';
        tocItem.innerHTML = `
                    <a href="#book-${index}" class="toc-link">${book.number}</a>
                `;
        tocContainer.appendChild(tocItem);

        // إنشاء أقسام المحتوى
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card';
        bookElement.id = `book-${index}`;
        bookElement.innerHTML = `
                    <h2 class="book-title">${book.number}</h2>
                    <p class="book-text">${book.text}</p>
                `;
        booksContainer.appendChild(bookElement);
      });
    })
    .catch(error => console.error('Error loading data:', error));
});