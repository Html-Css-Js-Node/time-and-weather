let header = document.getElementById('header');
let section = document.getElementById('section');
let style = document.getElementById('style');

header.innerHTML=`<h1>Просмотр файлов</h1>`;
section.innerHTML=`<h2>Открыть файл как текст с расширением: .txt; .html; .js;</h2> 
      <hr>
			<input type="file" id="openFile">
			<hr>
			<hr>
				<pre id="seeFile"></pre>
			<hr>
		
	
			
			`;
style.innerHTML=`
	#fileDisplayArea {
  margin-top: 2em;
  width: 100%;
  overflow-x: auto;`;	




//глобальное событие в браузера: загрузка окна и функции.
window.onload = function() {
		const openFile = document.getElementById('openFile');//поиск файла
		const seeFile = document.getElementById('seeFile');
//отображение файла
		openFile.addEventListener('change',
	//поиск файла; добавить событие 'change' в оброботку	
		function(e) {
			const file = openFile.files[0];
			//поиск файла; доступ к файлу
			const textType = /text.*/;
			//файл с расширением;
			

			if (file.type.match(textType)) {
			  //поиск файла; файл должен соответствовать расширению
				let reader = new FileReader();
//чтение содержимого файла
				reader.onload = function(e) {
				  //загрузка прочитанного файла
					seeFile.innerText = reader.result;
					//отображение содержимого файлa
			}

				reader.readAsText(file);	
			} else {
				seeFile.innerText = "File not supported!"
			}
		});
}

/*window.onload = function(){
  const openFile1 = document.getElementById('openFile1');
  const seeFile1 = document.getElementById('seeFile1');
  
  openFile1.addEventListener('change', function(a) {
    const file1 = openFile1.files[0];
    const textType1 = /text.*/;
    
 /*   if(file1.type.match(textType1)){
      
      let reader1 = new FileReader();
      
      reader1.onload = function(a){
        
        seeFile1.innerHTML = reader1.result;
      }
      
      reader1.readAsText(file1);
      
    } else {
      
      seeFile1.innerText = 'Этот файл не поддерживается!';
      
    }
  });
  
  
  
}*/
