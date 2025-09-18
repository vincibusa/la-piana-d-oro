"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import "leaflet/dist/leaflet.css"

const customIcon = new Icon({
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDI4LjVMMTUgMjguNUMyMy4wMDgxIDIxLjg2NzQgMjcuNSAxNi4wNjI1IDI3LjUgMTEuNUMyNy41IDcuMDYyNSAyMy44NzM3IDMuNSAxOS41IDMuNUMxNS4xMjYzIDMuNSAxMS41IDcuMDYyNSAxMS41IDExLjVDMTEuNSAxNi4wNjI1IDE1Ljk5MTkgMjEuODY3NCAyNCAyOC41TDE1IDI4LjVaIiBmaWxsPSIjMDA3MkZGIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTkuNSIgY3k9IjExLjUiIHI9IjMuNSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

export default function Map() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-96 bg-muted/20 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Caricamento mappa...</div>
      </div>
    )
  }

  const position: [number, number] = [41.9028, 12.4964] // Roma coordinates

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-luxury border border-white/20">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-primary">La Piana D'oro</h3>
              <p className="text-sm text-muted-foreground">
                Via Roma 123<br />
                00100 Roma (RM)
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}