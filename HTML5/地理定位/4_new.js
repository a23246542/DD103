function doFirst(){
    let area = document.getElementById('myMap');
    let position = new google.maps.LatLng(24.9774721,121.1824813);
    // let position = new google.maps.LatLng(24.9698374,121.188897);
    let options = {
        zoom: 14,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    
    let map = new google.maps.Map(area,options);

    let marker = new google.maps.Marker({
        // position: position,
        // map: map,
        position,
        map,
        icon: '../../images/foot.gif',
        title: '這不是資策會！！',
    });
}
window.addEventListener('load',doFirst);