/*
INDEX ANALYSIS USING SENTINEL-2 MSI IMAGERY THROUGH GOOGLE EARTH ENGINE 
*/

//----------------------------------indeks--------------//
//NDVI
var ndvi = sentinel_2.expression('(NIR - Red) / (NIR + Red)', {
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4')
});

//MNDVI
var mndvi = sentinel_2.expression('(RE2 - RE1) / (RE2 + RE1)', {
  'RE2': sentinel_2.select('B6'),
  'RE1': sentinel_2.select('B5')
});

//Green normalized difference vegetation index (GNDVI)
var gndvi = sentinel_2.expression('(NIR - Green) / (NIR + Green)', {
  'Green': sentinel_2.select('B3'),
  'NIR': sentinel_2.select('B8')
});


//Specific Leaf Area Vegetation Index (SLAVI)
var slavi = sentinel_2.expression('(NIR) / (Red + SWIR)', {
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4'),
  'SWIR': sentinel_2.select('B12')
});

//Enhanced Vegetation Index (EVI)
var evi = sentinel_2.expression('((NIR - Red) / ((NIR + 6) * (Red - 7.5) * (Blue + 1))) * 2.5', {
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4'),
  'Blue': sentinel_2.select('B2')
});

//SAVI
var savi = sentinel_2.expression('((NIR - Red) / (NIR + Red +0.5)) * (1.0+0.5)', {
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4')
});

//Atmospherically Resistant Vegetation Index (ARVI)
var arvi = sentinel_2.expression('(NIR - (Red - (1 * (Red - Blue)))) / (NIR + (Red - (1 * (Red - Blue))))', {
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4'),
  'Blue': sentinel_2.select('B2')
});

//NDWI
var ndwi = sentinel_2.expression('(Green - NIR) / (Green + NIR)', {
  'NIR': sentinel_2.select('B8'),
  'Green': sentinel_2.select('B3')
});

//Land Surface Water Index (LSWI)
var lswi = sentinel_2.expression('(NIR - SWIR) / (NIR + SWIR)', {
  'SWIR': sentinel_2.select('B12'),
  'NIR': sentinel_2.select('B8')
});

//Modified Normalized Difference Water Index (MNDWI)
var mndwi = sentinel_2.expression('(Green - SWIR) / (Green + SWIR)', {
  'SWIR': sentinel_2.select('B12'),
  'Green': sentinel_2.select('B3')
});

//Augmented Normalized Difference Water Index (ANDWI)
var andwi = sentinel_2.expression('(Blue + Green + Red - NIR - SWIR1 - SWIR2) / (Blue + Green + Red + NIR + SWIR1 + SWIR2)',{
  'SWIR1': sentinel_2.select('B11'),
  'SWIR2': sentinel_2.select('B12'),
  'Green': sentinel_2.select('B3'),
  'Red': sentinel_2.select('B4'),
  'Blue': sentinel_2.select('B2'),
  'NIR': sentinel_2.select('B8')
});

//Index-Based Built-Up Area Index (IBI)
var ibi = sentinel_2.expression('(((SWIR / (SWIR * NIR)) * 2) - ((NIR / (NIR + Red)) + (Green/(Green + SWIR)))) / (((SWIR / (SWIR * NIR)) * 2) + ((NIR / (NIR + Red)) + (Green/(Green + SWIR))))', {
  'SWIR': sentinel_2.select('B11'),
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4'),
  'Green': sentinel_2.select('B3')
});

//Normalized Difference Built Up Index (NDBI)
var ndbi = sentinel_2.expression('(SWIR1- NIR) / (SWIR1 + NIR)', {
  'SWIR1': sentinel_2.select('B11'),
  'NIR': sentinel_2.select('B8')
});   

//Inverted Red-Edge Chlorophyll Index (IRECI)
var ireci = sentinel_2.expression('(NIR - Red) / (R1 + R2)', {
  'NIR': sentinel_2.select('B7'),
  'Red': sentinel_2.select('B4'),
  'R1': sentinel_2.select('B5'),
  'R2': sentinel_2.select('B6')
});

//Normalized Difference Chlorophyll Index (NDCI) 
var ndci = sentinel_2.expression('(Red - RE)/(Red + RE)',{
  'RE': sentinel_2.select('B5'),
  'Red': sentinel_2.select('B4')
});

//Normalized Difference Moisture Index (NDMI)
var ndmi = sentinel_2.expression('(Red - SWIR1)/(Red + SWIR1)',{
  'Red': sentinel_2.select('B8'),
  'SWIR1': sentinel_2.select('B11')
});

//Normalized Difference Red-Edge (NDRE)
var ndre = sentinel_2.expression('(NIR - RE)/(NIR + RE)',{
  'RE': sentinel_2.select('B5'),
  'NIR': sentinel_2.select('B8')
});

//ReCI (Red Edge Chlorophyll Index)
var reci = sentinel_2.expression('(NIR/RE)-1',{
  'RE': sentinel_2.select('B5'),
  'NIR': sentinel_2.select('B8')
}); 
 
//PSSRa (Pigment-Specific Simple Ratio Index)
var pssra = sentinel_2.expression('(NIR)/(Red)',{
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4')
});

//MCARI (Modified Chlorophyll Absorption Ratio Index)
var mcari = sentinel_2.expression('((NIR - Red)-0.2*(NIR - Green))*(NIR / Red) ',{
  'NIR': sentinel_2.select('B8'),
  'Red': sentinel_2.select('B4'),
  'Green': sentinel_2.select('B3')
});

//CARI (Chlorophyll Absorption Ratio Index)
var cari = sentinel_2.expression('((RE - Red)-0.2*(RE - Green))*(RE / Red) ',{
  'RE': sentinel_2.select('B5'),
  'Red': sentinel_2.select('B4'),
  'Green': sentinel_2.select('B3')
});

//RVI (Ratio vegetation index)
var rvi = sentinel_2.expression('(NIR / Red)', {
  'Red': sentinel_2.select('B4'),
  'NIR': sentinel_2.select('B8')
});

//Difference vegetation index (DVI)
var dvi = sentinel_2.expression('(NIRn / Red)', {
  'Red': sentinel_2.select('B4'),
  'NIRn': sentinel_2.select('B9')
});  
//Modified Normalized Difference Water Index (MNDWI)
var mmri = sentinel_2.expression('(((Green - SWIR) / (Green + SWIR)) - ((NIR - Red) / (NIR + Red))) / (((Green - SWIR) / (Green + SWIR)) + ((NIR - Red) / (NIR + Red)))', {
  'SWIR': sentinel_2.select('B12'),
  'NIR': sentinel_2.select('B8'),
  'Green': sentinel_2.select('B3'),
  'Red': sentinel_2.select('B4')
});
