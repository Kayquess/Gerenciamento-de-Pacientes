if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); } 
			else { closeMenu(); }

	});
	

	$('div.menu ul li a').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});		


	function openMenu(){
		
		$('div.circle').addClass('expand');
					
		$('div.burger').addClass('open');	
		$('div.x, div.y, div.z').addClass('collapse');
		$('.menu li').addClass('animate');
		
		setTimeout(function(){ 
			$('div.y').hide(); 
			$('div.x').addClass('rotate30'); 
			$('div.z').addClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);
		
		

	}
	
	function closeMenu(){

		$('div.burger').removeClass('open');	
		$('div.x').removeClass('rotate45').addClass('rotate30'); 
		$('div.z').removeClass('rotate135').addClass('rotate150');				
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		
		setTimeout(function(){ 			
			$('div.x').removeClass('rotate30'); 
			$('div.z').removeClass('rotate150'); 			
		}, 50);
		setTimeout(function(){
			$('div.y').show(); 
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);													
		
	}

    document.getElementById('patientForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        var name = document.getElementById('nameInput').value;
        var age = document.getElementById('ageInput').value;
        var condition = document.getElementById('conditionInput').value;
    
        if (name === '' || age === '' || condition === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    
        addPatient(name, age, condition);
        clearForm();
    });
    
    function addPatient(name, age, condition) {
        var patientList = document.getElementById('patientList');
        var li = document.createElement('li');
        li.textContent = `Nome: ${name}, Idade: ${age}, Condição: ${condition}`;
        li.onclick = function() {
            this.parentNode.removeChild(this);
        };
        patientList.appendChild(li);
    }
    
    function clearForm() {
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('conditionInput').value = '';
    }