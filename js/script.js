/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
document.addEventListener('DOMContentLoaded', () => {
   const pageDiv = document.querySelector('div.page');
   const studentList = document.querySelectorAll('li.student-item');


   /*** 
      Create the `showPage` function to hide all of the items in the 
      list except for the ten you want to show.

      Pro Tips: 
      - Keep in mind that with a list of 54 students, the last page 
         will only display four.
      - Remember that the first student has an index of 0.
      - Remember that a function `parameter` goes in the parens when 
         you initially define the function, and it acts as a variable 
         or a placeholder to represent the actual function `argument` 
         that will be passed into the parens later when you call or 
         "invoke" the function 
   ***/
   const showPage = (list, page) => {
      for (let i = 0; i < list.length; i++) {
         const firstIndex = (page * 10) - 10;
         const lastIndex = (page * 10) - 1;
         if (list[i] >= firstIndex && list[i] <= lastIndex) {
            list[i].style.display = '';
         } else {
            list[i].style.display = 'none';
         }
      };
   }

   /*** 
      Create the `appendPageLinks function` to generate, append, and add 
      functionality to the pagination buttons.
   ***/
   const appendPageLinks = (list) => {
      const totalPages = Math.ceil(list.length / 10);
      
      const div = document.createElement('div');
      div.className = 'pagination';
      pageDiv.appendChild(div);

      const ul = document.createElement('ul');
      div.appendChild(ul);
      
      for (let i = 0; i < totalPages; i++) {
         const li = document.createElement('li');
         ul.appendChild(li);
         const a = document.createElement('a');
         const pageNum = (i + 1);
         a.textContent = pageNum;
         a.href = '#';
         li.appendChild(a);
      };
      
      const pageLinks = document.querySelectorAll('ul a');
      for (let i = 0; i < pageLinks.length; i++) {
         pageLinks[i].className = '';
         pageLinks[i].addEventListener('click', (e) => {
            const activePage = e.target;
            activePage.className = 'active';
            const pageNum = i + 1;
            showPage(list, pageNum);
         });
      }

   }

   appendPageLinks(studentList);

});
// Remember to delete the comments that came with this file, and replace them with your own code comments.