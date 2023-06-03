library(ggplot2)

p <- ggplot(luas_mgv, aes(x=Desa, y=Luas_Ha, fill=Luas_Ha)) +
          geom_bar(stat="identity") + 
          geom_text(aes(label=Luas_Ha), position=position_dodge(width=0.9), vjust=-0.25)
p 
