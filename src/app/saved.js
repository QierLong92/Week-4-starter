import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNav, TrailCard } from '../components/ui';
import { trails } from '../data/trails';
import { useApp } from '../context/AppContext';
export default function Saved() { const { savedIds } = useApp(); const saved = trails.filter((trail) => savedIds.includes(trail.id)); return <SafeAreaView style={styles.safe}><View style={styles.header}><Text style={styles.eyebrow}>YOUR COLLECTION</Text><Text style={styles.title}>Saved trails</Text><Text style={styles.sub}>{saved.length ? `${saved.length} trail${saved.length === 1 ? '' : 's'} saved for later` : 'Save a trail and it will appear here.'}</Text></View><ScrollView style={styles.list} contentContainerStyle={{ paddingBottom: 96 }}>{saved.length ? saved.map((trail) => <TrailCard key={trail.id} trail={trail} onOpen={() => router.push(`/trail/${trail.id}`)} />) : <View style={styles.blank}><MaterialCommunityIcons name="star-outline" size={50} color="#D4AB42" /><Text style={styles.blankTitle}>Your trail list is open</Text><Text style={styles.blankText}>Tap a star on any trail to keep it here.</Text></View>}</ScrollView><BottomNav /></SafeAreaView>; }
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F7F6F0' }, header: { padding: 22, paddingTop: 18 }, eyebrow: { fontSize: 11, letterSpacing: 1.6, color: '#276B58', fontWeight: '800' }, title: { fontSize: 31, fontWeight: '800', color: '#17342D', marginTop: 5 }, sub: { color: '#72807A', marginTop: 4 }, list: { flex: 1, paddingHorizontal: 22 }, blank: { marginTop: 80, alignItems: 'center' }, blankIcon: { fontSize: 50, color: '#D4AB42' }, blankTitle: { fontSize: 18, fontWeight: '800', color: '#254039', marginTop: 10 }, blankText: { color: '#72807A', marginTop: 5 } });


