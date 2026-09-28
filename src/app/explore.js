import { useMemo, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomNav, TrailCard } from "../components/ui";
import { trails } from "../data/trails";
const filters = ["All", "Easy", "Moderate", "Hard"];
export default function Explore() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const results = useMemo(
    () =>
      trails.filter(
        (trail) =>
          (filter === "All" || trail.difficulty === filter) &&
          trail.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [filter, query],
  );
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>TRAILHEAD</Text>
        <Text style={styles.title}>Explore trails</Text>
        <Text style={styles.sub}>A little outside looks good on you.</Text>
      </View>
      <View style={styles.search}>
        <MaterialCommunityIcons name="magnify" size={21} color="#718078" />
        <TextInput
          placeholder="Search trails"
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
          placeholderTextColor="#8D9793"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterRow}
        contentContainerStyle={styles.filters}
      >
        {filters.map((item) => (
          <Pressable
            key={item}
            onPress={() => setFilter(item)}
            style={[styles.filter, filter === item && styles.filterSelected]}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.filterTextSelected,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 96 }}
        showsVerticalScrollIndicator={false}
      >
        {results.map((trail) => (
          <TrailCard
            key={trail.id}
            trail={trail}
            onOpen={() => router.push(`/trail/${trail.id}`)}
          />
        ))}
        {!results.length && (
          <Text style={styles.empty}>No trails match that search.</Text>
        )}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F7F6F0" },
  header: { paddingHorizontal: 22, paddingTop: 16, paddingBottom: 14 },
  eyebrow: {
    fontSize: 11,
    letterSpacing: 1.7,
    color: "#276B58",
    fontWeight: "800",
  },
  title: {
    fontSize: 31,
    letterSpacing: -0.7,
    color: "#17342D",
    fontWeight: "800",
    marginTop: 5,
  },
  sub: { color: "#72807A", marginTop: 3 },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 22,
    borderWidth: 1,
    borderColor: "#E7E5DF",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
    gap: 9,
  },
  searchInput: { flex: 1, color: "#243B34", fontSize: 15 },
  filterRow: { height: 50, flexGrow: 0, flexShrink: 0 },
  filters: { alignItems: "center", paddingHorizontal: 22, gap: 9 },
  filter: {
    borderWidth: 1,
    borderColor: "#D9DED7",
    borderRadius: 999,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#FFF",
  },
  filterSelected: { backgroundColor: "#176B56", borderColor: "#176B56" },
  filterText: { color: "#5E6B65", fontWeight: "700", fontSize: 13 },
  filterTextSelected: { color: "white" },
  list: { flex: 1, paddingHorizontal: 22 },
  empty: { color: "#718078", textAlign: "center", marginTop: 32 },
});
