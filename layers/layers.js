var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_trace_1 = new ol.format.GeoJSON();
var features_trace_1 = format_trace_1.readFeatures(json_trace_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trace_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trace_1.addFeatures(features_trace_1);
var lyr_trace_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trace_1, 
                style: style_trace_1,
                interactive: true,
                title: '<img src="styles/legend/trace_1.png" /> trace'
            });
var format_points_2 = new ol.format.GeoJSON();
var features_points_2 = format_points_2.readFeatures(json_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_2.addFeatures(features_points_2);
var lyr_points_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_2, 
                style: style_points_2,
                interactive: true,
                title: '<img src="styles/legend/points_2.png" /> points'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_trace_1.setVisible(true);lyr_points_2.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_trace_1,lyr_points_2];
lyr_trace_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_points_2.set('fieldAliases', {'Oiseaux': 'Oiseaux', 'Nombre': 'Nombre', 'Contact': 'Contact', });
lyr_trace_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_points_2.set('fieldImages', {'Oiseaux': 'TextEdit', 'Nombre': 'TextEdit', 'Contact': 'TextEdit', });
lyr_trace_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_points_2.set('fieldLabels', {'Oiseaux': 'no label', 'Nombre': 'no label', 'Contact': 'no label', });
lyr_points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});