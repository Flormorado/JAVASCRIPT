<?php
if($_POST["message"]) {
    mail("ventasayd@gmail.com", "Here is the subject line",
    $_POST["insert your message here"]. "From: ventasayd@gmail.com");
    }
    ?>
<form action="contact.php" method="post">
    <div class="elem-group"> 
        <label for="name">Nombre</label> 
        <input type="text" id="name" name="visitor_name" placeholder="Nombre de ejemplo" pattern=[A-Z\sa-z]{3,20} required> 
    </div> 
    <div class="elem-group">
    <label for="email">Correo electrónico</label> 
    <input type="email" id="email" name="visitor_email" placeholder="ejemplo@email.com" required> 
    </div> 
    <div class="elem-group">
    <label for="department-selection">Área a contactar</label>
        <select id="department-selection" name="concerned_department" required> 
            <option value="">Selecciona un área</option> 
            <option value="billing">Facturación</option>
            <option value="marketing">Marketing</option>
            <option value="technical support">Servicio al cliente</option> 
            </select>
        </div>
        <div class="elem-group">
                <label for="title">Motivo de contacto</label> 
                <input type="text" id="title" name="email_title" required placeholder="Problema/Consulta" pattern=[A-Za-z0-9\s]{8,60}> 
            </div>
            <div class="elem-group">
                <label for="message">Solicitud</label> 
                <textarea id="message" name="visitor_message" placeholder="Escribe tu mensaje aquí." required></textarea> 
                </div>
                <button type="submit">Enviar mensaje</button>
                </form>
                <form action="envio.php" method="GET">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre"/>
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido"/>
                    <button id="envio">Enviar Formulario</button>
                </form>
