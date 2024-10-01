var wms_layers = [];

var format_dam_0 = new ol.format.GeoJSON();
var features_dam_0 = format_dam_0.readFeatures(json_dam_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dam_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dam_0.addFeatures(features_dam_0);
var lyr_dam_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dam_0, 
                style: style_dam_0,
                popuplayertitle: "dam",
                interactive: true,
                title: '<img src="styles/legend/dam_0.png" /> dam'
            });
var format_agl_join_1 = new ol.format.GeoJSON();
var features_agl_join_1 = format_agl_join_1.readFeatures(json_agl_join_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agl_join_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agl_join_1.addFeatures(features_agl_join_1);cluster_agl_join_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_agl_join_1
});
var lyr_agl_join_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_agl_join_1, 
                style: style_agl_join_1,
                popuplayertitle: "agl_join",
                interactive: true,
                title: '<img src="styles/legend/agl_join_1.png" /> agl_join'
            });

lyr_dam_0.setVisible(true);lyr_agl_join_1.setVisible(true);
var layersList = [lyr_dam_0,lyr_agl_join_1];
lyr_dam_0.set('fieldAliases', {'WaterName': 'WaterName', 'Name': 'Name', 'Type': 'Type', 'MI_STYLE': 'MI_STYLE', 'MI_PRINX': 'MI_PRINX', });
lyr_agl_join_1.set('fieldAliases', {'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Name': 'Name', 'TotalValue': 'TotalValue', });
lyr_dam_0.set('fieldImages', {'WaterName': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'MI_STYLE': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_agl_join_1.set('fieldImages', {'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Name': 'TextEdit', 'TotalValue': 'TextEdit', });
lyr_dam_0.set('fieldLabels', {'WaterName': 'inline label - always visible', 'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'MI_STYLE': 'no label', 'MI_PRINX': 'no label', });
lyr_agl_join_1.set('fieldLabels', {'Longitude': 'no label', 'Latitude': 'no label', 'Name': 'inline label - always visible', 'TotalValue': 'inline label - always visible', });
lyr_agl_join_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});