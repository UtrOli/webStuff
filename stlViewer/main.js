
let models = ["controlcase_bottom.stl","buttons.stl","controlcase_v2.stl"];

function STLViewer(model, elementID) {
    var elem = document.getElementById(elementID)

    var camera = new THREE.PerspectiveCamera(70,
        elem.clientWidth/elem.clientHeight, 1, 1000);

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(elem.clientWidth, elem.clientHeight);
        elem.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.05;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = .75;

    var scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 1.5));

    window.addEventListener('resize', function () {
        renderer.setSize(elem.clientWidth, elem.clientHeight);
        camera.aspect = elem.clientWidth/elem.clientHeight;
        camera.updateProjectionMatrix();
    }, false);

    (new THREE.STLLoader()).load(model, function (geometry) {
        var material = new THREE.MeshPhongMaterial({
            color: 0xff5533,
            specular: 100,
            shininess: 100 });
        var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

        var middle = new THREE.Vector3();
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(middle);
        mesh.position.x = -1 * middle.x;
        mesh.position.y = -1 * middle.y;
        mesh.position.z = -1 * middle.z;

        var largestDimension = Math.max(geometry.boundingBox.max.x,
                                geometry.boundingBox.max.y,
                                geometry.boundingBox.max.z)
        camera.position.z = largestDimension * 1.8;

        var animate = function () {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    });
}

window.onload = function() {
    STLViewer("/stlViewer/models/"+models[2], "model")

    for(i=0;i<models.length;i++){
        let code = '<div id="item'+i+'" style="width: 100%; height: 170px;"></div>';
        $("#menu").append(code);
        $("#item"+i).on("click",{model:models[i]}, function(event){
            $("#model").empty();
            STLViewer("/webStuff/stlViewer/models/"+event.data.model, "model");
        });
        STLViewer("/webStuff/stlViewer/models/"+models[i], "item"+i);
    }
}
