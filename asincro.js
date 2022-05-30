let edad = prompt('ingresa tu edad?');
alert('wooah tienes ' + edad *365 + ' dias')

let edad_maxima = prompt('cuantos anos crees que vas a vivir?');
let snack =prompt('cual es tu snack favorito?');
let eat_snack = prompt('cuantos snack comes a la semana?')
let restante = edad_maxima - edad
let total_snack = restante * 365
let snack_semanal = total_snack / 7
alert('te quedan exactamente ' + snack_semanal + ' ' + snack + 'por el resto de tu vida')