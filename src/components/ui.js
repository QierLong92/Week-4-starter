import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router, usePathname } from 'expo-router';
import { difficultyColor } from '../data/trails';
import { useApp } from '../context/AppContext';

export function BottomNav() {
  const path = usePathname();
  const items = [{ route: 'explore', icon: 'compass-outline', activeIcon: 'compass', label: 'Explore' }, { route: 'saved', icon: 'star-outline', activeIcon: 'star', label: 'Saved' }, { route: 'profile', icon: 'account-circle-outline', activeIcon: 'account-circle', label: 'Profile' }];
  return <View style={styles.nav}>{items.map((item) => { const active = path === `/${item.route}`; return <Pressable key={item.route} onPress={() => router.replace(`/${item.route}`)} style={styles.navItem}><MaterialCommunityIcons name={active ? item.activeIcon : item.icon} size={24} color={active ? '#166653' : '#8A928E'} /><Text style={[styles.navText, active && styles.active]}>{item.label}</Text></Pressable>; })}</View>;
}

export function TrailCard({ trail, onOpen }) {
  const { savedIds, toggleSaved } = useApp(); const saved = savedIds.includes(trail.id);
  return <Pressable onPress={onOpen} style={styles.card}><Image source={{ uri: trail.image }} style={styles.cardImage} /><View style={styles.cardBody}><View style={styles.cardTop}><View style={{ flex: 1 }}><Text style={styles.cardTitle}>{trail.name}</Text><Text style={styles.cardMeta}>{trail.distance}  ·  {trail.elevation}</Text></View><Pressable hitSlop={12} onPress={() => toggleSaved(trail.id)}><MaterialCommunityIcons name={saved ? 'star' : 'star-outline'} size={28} color={saved ? '#E3A72F' : '#72807B'} /></Pressable></View><Text style={[styles.tag, { color: difficultyColor[trail.difficulty], borderColor: difficultyColor[trail.difficulty] }]}>{trail.difficulty}</Text></View></Pressable>;
}
const styles = StyleSheet.create({ nav: { height: 76, flexDirection: 'row', backgroundColor: '#FEFDF9', borderTopWidth: 1, borderColor: '#E9E6DD', paddingTop: 9 }, navItem: { flex: 1, alignItems: 'center', gap: 2 }, navText: { fontSize: 11, color: '#8A928E', fontWeight: '600' }, active: { color: '#166653' }, card: { marginBottom: 16, backgroundColor: '#FFFFFF', borderRadius: 18, overflow: 'hidden', borderWidth: 1, borderColor: '#ECE9E2' }, cardImage: { height: 142, width: '100%' }, cardBody: { padding: 14 }, cardTop: { flexDirection: 'row' }, cardTitle: { fontSize: 18, fontWeight: '700', color: '#17342D' }, cardMeta: { fontSize: 13, color: '#75817C', marginTop: 5 }, tag: { alignSelf: 'flex-start', borderWidth: 1, borderRadius: 999, fontSize: 12, fontWeight: '700', paddingHorizontal: 9, paddingVertical: 4, marginTop: 12, overflow: 'hidden' } });
